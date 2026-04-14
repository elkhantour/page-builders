<?php

use App\Http\Controllers\Api\BuilderController;
use Illuminate\Support\Facades\Route;

Route::get('/v1/builders/all', [BuilderController::class, 'index']);
 
