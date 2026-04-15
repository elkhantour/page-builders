<?php

namespace App\Services;

/**
 * Converts the initial editor.php from the official git into
 * a Laravel Service.
 *
 */

class VvvebJsService
{
    public function render(): string
    {
        $editorPath = public_path('vendor/vvvebjs');

        $html = file_get_contents($editorPath . '/editor.html');

        $htmlFiles = array_merge(
            glob($editorPath . '/my-pages/*.html'),
            glob($editorPath . '/demo/*/*.html'),
            glob($editorPath . '/demo/*.html')
        );

        $files = '';

        foreach ($htmlFiles as $file) {

            $file = str_replace($editorPath . '/', '', $file);

            if (in_array($file, ['new-page-blank-template.html', 'editor.html'])) continue;

            $pathInfo = pathinfo($file);

            $filename = $pathInfo['filename'];
            $folder = preg_replace('@/.+?$@', '', $pathInfo['dirname']);
            $subfolder = preg_replace('@^.+?/@', '', $pathInfo['dirname']);

            if ($filename === 'index' && $subfolder) {
                $filename = $subfolder;
            }

            $url = $file;
            $name = $filename;
            $title = ucfirst($name);

            $files .= "{name:'$name', file:'$file', title:'$title', url:'$url', folder:'$folder'},";
        }

        // Inject page list
        $html = str_replace('= defaultPages;', " = [$files];", $html);

        // Inject base tag (safe global fix)
        $html = preg_replace(
            '/<head[^>]*>/i',
            '<head><base href="/vendor/vvvebjs/">',
            $html,
            1
        );

        return $html;
    }
}
