// Dependency Inversion
// Principle of object-oriented programming that aims to reduce the coupling between classes and components

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
  }
}

class MongoUserRepository {
  getUserById(id) {
    // implementation
  }
}

class MySqlUserRepository {
  getUserById(id) {
    // implementation
  }
}

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);