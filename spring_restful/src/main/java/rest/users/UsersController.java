package rest.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Igor on 12.01.2018.
 */
@RestController
@RequestMapping(path = "/users")
class UsersController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping(path = "/all")
    public @ResponseBody
	Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

	@RequestMapping(method = RequestMethod.POST)
    public void addUser(@RequestBody AddUserRequest addUserRequest) {
        User user = new User();
        user.setName(addUserRequest.getName());
        user.setSurname(addUserRequest.getSurname());
        userRepository.save(user);
    }
}
