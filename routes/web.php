<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BuilderPageController;
use App\Http\Controllers\VvvebJsController;

Route::get('/', function () {
    return view('app');
});

Route::get('/builder/{name}', [BuilderPageController::class, 'show']);

/**
 * The Vvvebjs is in itself a quite complex and bundled environment with
 * its own js imports, php files, fixed position. In other word, it's been
 * designed to be used as a standalone page, not a module within a page.
 * For the sake of simplicity and experimentation we will embed it in an
 * IFrame.
 */
Route::get('/builder/vvvebjs/iframe', [VvvebJsController::class, 'iframe']);
