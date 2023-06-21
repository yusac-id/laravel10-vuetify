<?php

namespace Database\Seeders;

use App\Models\User;
use Exception;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        try {
            User::create([
                'role' => 'owner',
                'type' => 'admin',
                'username' => 'admin',
                'password' => '12345678',
                'name' => 'Administrator',
                'email' => ''
            ]);
            $this->command->info('User has been created.');
        } catch (Exception $e) {
            $this->command->info('User exist.');
        }
    }
}
