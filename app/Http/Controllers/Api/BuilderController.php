<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\BuilderService;

class BuilderController extends Controller
{
    public function index(BuilderService $service)
    {
        return response()->json($service->all());
    }
}
