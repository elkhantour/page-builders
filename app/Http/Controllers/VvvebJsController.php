<?php

namespace App\Http\Controllers;

use App\Services\VvvebJsService;

class VvvebJsController extends Controller
{
    public function iframe(VvvebJsService $service)
    {
        return response($service->render());
    }
}
