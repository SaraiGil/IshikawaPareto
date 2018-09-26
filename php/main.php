<?php

	$problematica = $_POST['p'];
	$c1 = $_POST['c1'];
	$c2 = $_POST['c2'];
	$c3 = $_POST['c3'];
	$c4 = $_POST['c4'];
	$c5 = $_POST['c5'];
	$c6 = $_POST['c6'];

	if ($c1 != null && $c1 != "" && $problematica != null && $problematica != "")
	{
		$dataFile = fopen("../dato.json", "w") or die("Unable to create JSON");

		$dataToWrite = '{"name": "'.$problematica.'","children":[';
		$dataToWrite .= '{"name": "'.$c1.'"}';

		if ($c2 != null && $c2 != "")
		{
			$dataToWrite .= ',{"name": "'.$c2.'"}';
		}
		if ($c3 != null && $c3 != "")
		{
			$dataToWrite .= ',{"name": "'.$c3.'"}';
		}
		if ($c4 != null && $c4 != "")
		{
			$dataToWrite .= ',{"name": "'.$c4.'"}';
		}
		if ($c5 != null && $c5 != "")
		{
			$dataToWrite .= ',{"name": "'.$c5.'"}';
		}
		if ($c6 != null && $c6 != "")
		{
			$dataToWrite .= ',{"name": "'.$c6.'"}';
		}

		$dataToWrite .= ']}';
		fwrite($dataFile, $dataToWrite);
		fclose($dataFile);
		echo "1";
	}
	else
	{
		echo "0";
	}

?>