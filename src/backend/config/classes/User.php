<?php
  class User {
    public static function isAdmin($userId) {
      global $pdo;
      $id = (int) $userId;
      $reqRole = $pdo->prepare('SELECT user_role FROM users WHERE id = ?');
      $reqRole->execute([$id]);
      if ($reqRole->rowCount() == 1) {
        $role = $reqRole->fetch()->user_role;
        if ($role == "admin") {
          return true;
        }
        return false;
      }
    }
    public static function reqUser($userId) {
      global $pdo;
      $id = (int) $userId;
      $reqUser = $pdo->prepare('SELECT id, full_name, pseudo, user_role, structures FROM users WHERE id = ?');
      $reqUser->execute([$id]);
      if ($reqUser->rowCount() == 1) {
        $user = $reqUser->fetch();
        return $user;
      } else {
        return false;
      }
    }
  }
  