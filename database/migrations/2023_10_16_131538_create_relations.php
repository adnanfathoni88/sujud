<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

        // user
        if (!Schema::hasColumn('users', 'role_id')) {
            Schema::table('users', function (Blueprint $table) {
                $table->unsignedBigInteger('role_id');
                $table->foreign('role_id')->references('id')->on('roles')->onDelete('restrict')->onUpdate('cascade');
            });
        }


        // produk
        if (!Schema::hasColumn('produks', 'kategori_id')) {
            Schema::table('produks', function (Blueprint $table) {
                $table->unsignedBigInteger('kategori_id');
                $table->foreign('kategori_id')->references('id')->on('kategoris')->onDelete('restrict')->onUpdate('cascade');
            });
        }

        // pesanan
        if (!Schema::hasColumn('pesanans', 'varian_id')) {
            Schema::table('pesanans', function (Blueprint $table) {
                $table->unsignedBigInteger('varian_id');
                $table->foreign('varian_id')->references('id')->on('varians')->onDelete('restrict')->onUpdate('cascade');
            });
        }

        if (!Schema::hasColumn('pesanans', 'user_id')) {
            Schema::table('pesanans', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('cascade');
            });
        }

        // ulasan
        if (!Schema::hasColumn('ulasans', 'varian_id')) {
            Schema::table('ulasans', function (Blueprint $table) {
                $table->unsignedBigInteger('varian_id');
                $table->foreign('varian_id')->references('id')->on('varians')->onDelete('restrict')->onUpdate('cascade');
            });
        }
        if (!Schema::hasColumn('ulasans', 'user_id')) {
            Schema::table('ulasans', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('cascade');
            });
        }
        if (!Schema::hasColumn('ulasans', 'parent_id')) {
            Schema::table('ulasans', function (Blueprint $table) {
                $table->unsignedBigInteger('parent_id')->nullable();
                $table->foreign('parent_id')->references('id')->on('ulasans')->onDelete('restrict')->onUpdate('cascade');
            });
        }


        // gambar
        if (!Schema::hasColumn('gambars', 'varian_id')) {
            Schema::table('gambars', function (Blueprint $table) {
                $table->unsignedBigInteger('varian_id');
                $table->foreign('varian_id')->references('id')->on('varians')->onDelete('restrict')->onUpdate('cascade');
            });
        }


        //variasi
        if (!Schema::hasColumn('varians', 'produk_id')) {
            Schema::table('varians', function (Blueprint $table) {
                $table->unsignedBigInteger('produk_id');
                $table->foreign('produk_id')->references('id')->on('produks')->onDelete('restrict')->onUpdate('cascade');
            });
        }

		// ongkir
		if (!Schema::hasColumn('ongkirs', 'pelanggan_user_id')) {
            Schema::table('ongkirs', function (Blueprint $table) {
                $table->unsignedBigInteger('pelanggan_user_id');
                $table->foreign('pelanggan_user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('cascade');
            });
        }

		// ongkir
		if (!Schema::hasColumn('carts', 'user_id')) {
            Schema::table('carts', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('cascade');
            });
        }
		
		if (!Schema::hasColumn('carts', 'varian_id')) {
            Schema::table('carts', function (Blueprint $table) {
                $table->unsignedBigInteger('varian_id');
                $table->foreign('varian_id')->references('id')->on('varians')->onDelete('restrict')->onUpdate('cascade');
            });
        }
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropColumn(['role_id']);
        });

        Schema::table('produks', function (Blueprint $table) {
            $table->dropForeign(['kategori_id']);
            $table->dropColumn(['kategori_id']);
        });

        Schema::table('pesanans', function (Blueprint $table) {
            $table->dropForeign(['varian_id']);
            $table->dropForeign(['user_id']);
            $table->dropColumn(['varian_id', 'user_id']);
        });

        Schema::table('ulasans', function (Blueprint $table) {
            $table->dropForeign(['varian_id']);
            $table->dropForeign(['user_id']);
            $table->dropColumn(['varian_id', 'user_id']);
        });

        Schema::table('gambars', function (Blueprint $table) {
            $table->dropForeign(['varian_id']);
            $table->dropColumn(['varian_id']);
        });

        Schema::table('varians', function (Blueprint $table) {
            $table->dropForeign(['produk_id']);
            $table->dropColumn(['produk_id']);
        });

        Schema::table('varians', function (Blueprint $table) {
            $table->dropForeign(['ukuran_id']);
            $table->dropColumn(['ukuran_id']);
        });

        Schema::table('varians', function (Blueprint $table) {
            $table->dropForeign(['warna_id']);
            $table->dropColumn(['warna_id']);
        });

        Schema::table('ongkirs', function (Blueprint $table) {
            $table->dropForeign(['pelanggan_user_id']);
            $table->dropColumn(['pelanggan_user_id']);
        });
		
        Schema::table('carts', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn(['user_id']);
			$table->dropForeign(['varian_id']);
            $table->dropColumn(['varian_id']);
        });
    }
};
