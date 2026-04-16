<?php

namespace App\Services;

/**
 * Used as the main registry for builders informations.
 * Mostly used by API to retrieve information about each builders.
 * Doesn't handle inherent business logic of builders, it rather
 * acts as a simple GETTER.
 *
 */
class BuilderRegistryService
{
    public function all(): array
    {
        return [
            [
                'id' => 0,
                'label' => 'Puck Editor',
                'path' => '/builder/puck',
                'description' => 'An open source library using React as front-end interface.',
                'website' => 'https://puckeditor.com/',
                'stack' => ['react'],
            ],
            [
                'id' => 1,
                'label' => 'GrapesJS',
                'path' => '/builder/grapesjs',
                'description' => 'A JS based block editor, provide a vanilla JS or a React support.',
                'website' => 'https://grapesjs.com/docs/#what-is-grapesjs',
                'stack' => ['javascript', 'react'],
            ],
            [
                'id' => 2,
                'label' => 'Vvvebjs',
                'path' => '/builder/vvvebjs',
                'description' => 'A JS based block editor.',
                'website' => 'https://github.com/givanz/Vvvebjs',
                'stack' => ['javascript', 'php', 'bootstrap'],
            ],
            [
                'id' => 3,
                'label' => 'Craft.js',
                'path' => '/builder/craftjs',
                'description' => 'A highly customizable React based block editor, providing components and internal logics to build the whole interface from sratch.',
                'website' => 'https://craft.js.org/',
                'stack' => ['react'],
            ],

        ];
    }

    public function findByLabel($label)
    {
        if ($label == 'all')
            return $this->all();

        foreach ($this->all() as $builder) {
            if ($builder['label'] === $label) {
                return $builder;
            }
        }

        return null;
    }
}
