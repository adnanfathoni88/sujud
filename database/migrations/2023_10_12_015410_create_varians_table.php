<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('varians', function (Blueprint $table) {
            $table->id();
            $table->string('ukuran');
            $table->string('warna');
            $table->integer('stok')->nullable();
            $table->integer('harga')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('varians');
    }
};
