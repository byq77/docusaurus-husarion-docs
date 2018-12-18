---
id: doc6
title: Latin-ish
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

## Lorem

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum massa eget nulla aliquet sagittis. Proin odio tortor, vulputate ut odio in, ultrices ultricies augue. Cras ornare ultrices lorem malesuada iaculis. Etiam sit amet libero tempor, pulvinar mauris sed, sollicitudin sapien.

## Mauris In Code

```cpp
void ROSbot::odometryUpdater()
{
    while (true)
    {
        enc_FR = wheelFR->getDistance();
        enc_RR = wheelRR->getDistance();
        enc_RL = wheelRL->getDistance();
        enc_FL = wheelFL->getDistance();

        enc_L = (enc_FL + enc_RL) / (2 * tyre_deflection);
        enc_R = (enc_FR + enc_RR) / (2 * tyre_deflection);

        wheel_L_ang_vel = ((2 * 3.14 * enc_L / enc_res) - wheel_L_ang_pos) / delay_s;
        wheel_R_ang_vel = ((2 * 3.14 * enc_R / enc_res) - wheel_R_ang_pos) / delay_s;

        wheel_L_ang_pos = 2 * 3.14 * enc_L / enc_res;
        wheel_R_ang_pos = 2 * 3.14 * enc_R / enc_res;

        robot_angular_vel = (((wheel_R_ang_pos - wheel_L_ang_pos) * wheel_radius / (robot_width * diameter_mod)) - robot_angular_pos) / delay_s;
        robot_angular_pos = (wheel_R_ang_pos - wheel_L_ang_pos) * wheel_radius / (robot_width * diameter_mod);
        robot_x_vel = (wheel_L_ang_vel * wheel_radius + robot_angular_vel * robot_width / 2) * cos(robot_angular_pos);
        robot_y_vel = (wheel_L_ang_vel * wheel_radius + robot_angular_vel * robot_width / 2) * sin(robot_angular_pos);
        robot_x_pos = robot_x_pos + robot_x_vel * delay_s;
        robot_y_pos = robot_y_pos + robot_y_vel * delay_s;
        sys.delay(loop_delay);
    }
}
```

## Nulla

Nulla facilisi. Maecenas sodales nec purus eget posuere. Sed sapien quam, pretium a risus in, porttitor dapibus erat. Sed sit amet fringilla ipsum, eget iaculis augue. Integer sollicitudin tortor quis ultricies aliquam. Suspendisse fringilla nunc in tellus cursus, at placerat tellus scelerisque. Sed tempus elit a sollicitudin rhoncus. Nulla facilisi. Morbi nec dolor dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et aliquet lectus. Pellentesque sit amet eros nisi. Quisque ac sapien in sapien congue accumsan. Nullam in posuere ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin lacinia leo a nibh fringilla pharetra.

## Orci

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin venenatis lectus dui, vel ultrices ante bibendum hendrerit. Aenean egestas feugiat dui id hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in tellus laoreet, eleifend nunc id, viverra leo. Proin vulputate non dolor vel vulputate. Curabitur pretium lobortis felis, sit amet finibus lorem suscipit ut. Sed non mollis risus. Duis sagittis, mi in euismod tincidunt, nunc mauris vestibulum urna, at euismod est elit quis erat. Phasellus accumsan vitae neque eu placerat. In elementum arcu nec tellus imperdiet, eget maximus nulla sodales. Curabitur eu sapien eget nisl sodales fermentum.

## Phasellus

Phasellus pulvinar ex id commodo imperdiet. Praesent odio nibh, sollicitudin sit amet faucibus id, placerat at metus. Donec vitae eros vitae tortor hendrerit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae purus dolor. Duis suscipit ac nulla et finibus. Phasellus ac sem sed dui dictum gravida. Phasellus eleifend vestibulum facilisis. Integer pharetra nec enim vitae mattis. Duis auctor, lectus quis condimentum bibendum, nunc dolor aliquam massa, id bibendum orci velit quis magna. Ut volutpat nulla nunc, sed interdum magna condimentum non. Sed urna metus, scelerisque vitae consectetur a, feugiat quis magna. Donec dignissim ornare nisl, eget tempor risus malesuada quis.
