# reflect-ui-react
[Reflect](http://reflect.bridged.xyz/) UI components for [React](https://github.com/facebook/react)

## Components

### Button

```tsx
import { Button } from '@reflect-ui/react';

import Button, { ButtonVariants } from '@reflect-ui/react/objects/button'
// You can import detailed typings/enums from object files

<Button size="medium" />
// Available sizes are `small(s, sm)`, `medium(m, md)`, `large(l, lg)`
// Default is `medium`

<Button radius={16} />
// Default border radius is 16

<Button variant="outline" />
// Available variants are `filled`, `outline`, `ghost`
// Default is of course, `filled`

<Button variant={ButtonVariants.outline} />
// You can pass variant value from enum `ButtonVariants` for safety
```

For detailed information about the details and the system, please visit [Reflect System/Button](#).
