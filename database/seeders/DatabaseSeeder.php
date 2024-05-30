<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use App\Models\Kategori;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  public function run(): void
  {
    Role::create(['id' => '1', 'nama' => 'admin']);
    Role::create(['id' => '2', 'nama' => 'user']);
    Role::create(['id' => '3', 'nama' => 'superadmin']);
    Kategori::create(['id' => '1', 'nama' => 'baju']);
    User::create(['id' => '1', 'nama' => 'admin', 'email' => 'admin@gmail.com',  'password' => 'admin', 'role_id' => '1']);
  }
}
