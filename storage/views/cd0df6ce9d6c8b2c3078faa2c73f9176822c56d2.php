<?php
$url = app('Flarum\Http\UrlGenerator');
?>
<div class="container">
    <h2><?php echo e($translator->trans('fof-user-directory.forum.page.nav')); ?></h2>

    <ul>
        <?php $__currentLoopData = $apiDocument->data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li>
                <?php echo e($user->attributes->username); ?>

            </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>

    <a href="<?php echo e($url->to('forum')->route('fof_user_directory')); ?>?page=<?php echo e($page + 1); ?>"><?php echo e($translator->trans('core.views.index.next_page_button')); ?> &raquo;</a>
</div>
