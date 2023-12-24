
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
 * controller.ts
 */

import { Request, Response } from 'express';
import mailService from "../service/mail.service";

const sendTest = (req: Request, res: Response) => {
    // Create new mail data object
    const data = {
        name: req.body.name,
        email: req.body.email
    };

    try {
        mailService.emailTest(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}


const sendAgentInvite = (req: Request, res: Response) => {
    // Create new mail data object
    const data = {
        name: req.body.name,
        email: req.body.email
    };

    try {
        mailService.emailAgent(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}

const sendMonitorInvite = (req: Request, res: Response) => {
    // Create new mail data object
    const data = {
        name: req.body.name,
        email: req.body.email
    };

    try {
        mailService.emailMonitor(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}

const controller = {
    sendTest,
    sendAgentInvite,
    sendMonitorInvite
};
export default controller;

