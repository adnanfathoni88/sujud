<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
		Schema::create('ongkirs', function (Blueprint $table) {
            $table->id();
            $table->string('pesanan_grup');
			$table->string('resi')->nullable();
			$table->string('ekspedisi')->nullable();
			$table->integer('ongkir')->default(0);
			$table->integer('berat')->default(0);
			$table->boolean('telah_sampai')->default(false);
			$table->boolean('is_confirmed_by_admin')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ongkirs');
    }
};
