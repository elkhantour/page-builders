<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::get('/builder/{name}', function () {
    // redirect to app as well cause content is handled by React Router Dom in the front end app
    return view('app');
});
