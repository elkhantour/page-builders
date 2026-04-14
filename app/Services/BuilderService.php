<?php

namespace App\Services;

class BuilderService
{
    public function all(): array
    {
        return [
            [
                'id' => 0,
                'label' => 'Puck Editor',
                'path' => '/builder/puck',
            ],
        ];
    }
}
