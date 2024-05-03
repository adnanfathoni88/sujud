<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            $table->date('tgl_bayar');
            $table->string('metode');
            $table->string('status'); // pending, success, failed
            $table->string('total');
			$table->string('pesanan_grup');
			$table->string('reference');
			$table->string('publisher_order_id');
			$table->string('signature');
			$table->string('order_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
