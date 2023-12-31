/*
 *
 * VirtualYou Project
 * Copyright 2023 David L Whitehurst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * config.ts
 */

import * as dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

const envSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.string().required().default('3007'),
    AWS_REGION: Joi.string().required().default('us-east-1'),
    AWS_ACCESS_KEY: Joi.string().required().default('xyz'),
    AWS_SECRET_ACCESS_KEY: Joi.string().required().default('xyz456'),
});

const { value: validatedEnv, error } = envSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env, { abortEarly: false, stripUnknown: true });

if (error) {
    throw new Error(
        `Environment variable validation error: \n${error.details
            .map((detail) => detail.message)
            .join('\n')}`
    );
}

const config = {
    node_env: validatedEnv.NODE_ENV,
    server: {
        port: validatedEnv.PORT,
        url: validatedEnv.SERVER_URL
    },
    aws: {
        region: validatedEnv.AWS_REGION,
        key: validatedEnv.AWS_ACCESS_KEY,
        secret: validatedEnv.AWS_SECRET_ACCESS_KEY,
    }
} as const;

export default config;