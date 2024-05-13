<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Kategori;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
		Role::create(['id' => '1', 'nama' => 'admin']);
		Role::create(['id' => '2', 'nama' => 'user']);
		Role::create(['id' => '3', 'nama' => 'superadmin']);
		Kategori::create(['id' => '1', 'nama' => 'baju']);
    }
}
