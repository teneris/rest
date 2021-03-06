#!/usr/bin/php -q
<?php
/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013 Daniel Corn
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
/*
 * rest
 * @author daniel
 * Date: 21.09.13
 * Time: 20:49
 */

if(php_sapi_name() != 'cli') {
	die ('Access denied.');
}

// Defining circumstances for CLI mode:
define('TYPO3_cliMode', TRUE);
define('TYPO3_MODE', 'CLI');

require __DIR__ . '/../../../typo3/sysext/core/Classes/Core/Bootstrap.php';
$bootstrap = \TYPO3\CMS\Core\Core\Bootstrap::getInstance();
$bootstrap->baseSetup('typo3conf/ext/rest/');

$bootstrap
	->loadConfigurationAndInitialize()
	->loadTypo3LoadedExtAndExtLocalconf(TRUE)
	->applyAdditionalConfigurationSettings()
	->initializeTypo3DbGlobal()
;

if (file_exists(__DIR__ . '/vendor/react/')) {
	require_once __DIR__ . '/vendor/autoload.php';
} else {
	Tx_CunddComposer_Autoloader::register();
}

$port = 1337;
$host = '127.0.0.1';
if (isset($argv[1])) {
	$port = $argv[1];
}
if (isset($argv[2])) {
	$host = $argv[2];
}
$restServer = new \Cundd\Rest\Server($port, $host);
$restServer->start();
?>