<?php

/*
 * This file is part of fof/ban-ips.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\BanIPs\Commands;

use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use FoF\BanIPs\BannedIP;
use FoF\BanIPs\Repositories\BannedIPRepository;
use FoF\BanIPs\Validators\BannedIPValidator;

class EditBannedIPHandler
{
    use AssertPermissionTrait;

    /**
     * @var BannedIPRepository
     */
    private $bannedIPs;

    /**
     * @var BannedIPValidator
     */
    private $validator;

    /**
     * @param BannedIPRepository $bannedIPs
     * @param BannedIPValidator  $validator
     */
    public function __construct(BannedIPRepository $bannedIPs, BannedIPValidator $validator)
    {
        $this->bannedIPs = $bannedIPs;
        $this->validator = $validator;
    }

    /**
     * @param EditBannedIP $command
     *
     * @return BannedIP
     */
    public function handle(EditBannedIP $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $attributes = array_get($data, 'attributes', []);

        $bannedIP = BannedIP::find($command->bannedId);

        $this->assertCan($actor, 'banIP');

        if ($bannedIP !== null && $actor === $bannedIP->creator) {
            throw new PermissionDeniedException();
        } elseif ($bannedIP == null) {
            throw new RouteNotFoundException();
        }

        if (isset($attributes['userId'])) {
            $bannedIP->user_id = $attributes['userId'];
        }

        if (isset($attributes['ipAddress'])) {
            $bannedIP->address = $attributes['ipAddress'];
        }

        if (isset($attributes['reason'])) {
            $bannedIP->reason = $attributes['reason'];
        }

        $this->validator->assertValid($bannedIP->getDirty());

        $bannedIP->save();

        return $bannedIP;
    }
}
