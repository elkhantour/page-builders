<?php

namespace App\Http\Controllers;

use App\Services\PHPageBuilderService;
use App\Services\VvvebJsService;
use Illuminate\Http\Response;


/**
 * Handles the builder rendering business logic according to the provided routes.
 * The challenge being that sometimes we need to simply use our
 * SPA for front-end based editor like Puck or GrapesJS, but
 * some editors come with full PHP library package.
 *
 */
class BuilderPageController extends Controller
{
    public function show(string $name,
                         PHPageBuilderService $phpPageBuilder,
                         VvvebJsService $vvveb)
    {
        return match ($name) {
            'puck' => view('app'),
            'grapesjs' => view('app'),
            'vvvebjs' => view('app'),
            'craftjs' => view('app'),
            'phpagebuilder' => view('phpagebuilder', [
                'builderContent' => $phpPageBuilder->handle(),
            ]),
            default => abort(404),
        };
    }
}
