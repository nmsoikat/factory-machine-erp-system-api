import { faker } from '@faker-js/faker';
import { User } from "../../../features/user/entities/user.entity";
import { setSeederFactory } from "typeorm-extension";

export const UserFactory = setSeederFactory(User, () => {
    const user = new User();

    user.name = faker.person.fullName();
    user.emp_id = String(faker.number.int());
    user.email = faker.internet.email();
    user.phone = String(faker.phone);
    user.password = '$2a$10$zJj5eVpL4wVjQyaRupvohuSAuDCRHp1a9uHK30kbjA6iZJ51p0NY6'; // 123456

    return user;
})