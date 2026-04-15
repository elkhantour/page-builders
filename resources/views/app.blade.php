<!DOCTYPE html>
<html>

<head>
	@vite('resources/js/main.tsx')
	@yield('head')
</head>

<body class="text-black">
	<div id="root"></div>
	@yield('content')
</body>

</html>
