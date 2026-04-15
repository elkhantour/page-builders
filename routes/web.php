<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BuilderPageController;

Route::get('/', function () {
    return view('app');
});

Route::get('/builder/{name}', [BuilderPageController::class, 'show']);
