<?php

namespace App\Traits;


trait ResponseFormat {
    protected function res($content, $status) {
		$response = array('response' => $content, 'success' => ($status === 200 || $status === 201));
		return response()->json($response, $status);
    }
}