<?php

namespace App\Services;
use PHPageBuilder\PHPageBuilder;

/**
 * Dedicated service provider for the builder PHPageBuilder.
 * Handles the initialisation and other builder relative logics.
 *
 */
class PHPageBuilderService
{
    protected PHPageBuilder $builder;

    public function __construct()
    {
        // $config = config('pagebuilder'); // Laravel config system
        //$this->builder = new PHPageBuilder($config);
        //$this->builder = app('phpPageBuilder');
                
    }

    public function handle()
    {
        //    return $this->builder->handleRequest();
    }
}
