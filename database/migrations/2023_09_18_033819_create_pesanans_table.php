<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * 
     */

    public function up(): void
    {
        Schema::create('pesanans', function (Blueprint $table) {
            $table->id();
            $table->string('alamat');
            $table->string('pesanan_grup');
            $table->integer('qty');
            $table->integer('total');
            $table->integer('diskon');
            $table->date('tgl_pesan')->default(now());
            $table->enum('status', ["belum-bayar", "dibayar", "failed"]);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pesanans');
    }
};
