import { createConnection } from 'typeorm';

import * as config from '../ormconfig.json';

createConnection(config);
