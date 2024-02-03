
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

const sendPasswordRenew = async (req: Request, res: Response) => {
    const data = {
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username,
        returnLink: req.body.returnLink,
    }
    try {
        await mailService.passwordRenew(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}
const sendUsernameRecover = async (req: Request, res: Response) => {
    const data = {
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username
    }
    try {
        await mailService.usernameRecover(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}

const sendAgentInvite = async (req: Request, res: Response) => {
    // Create new mail data object
    const data = {
        name: req.body.name,
        email: req.body.email,
        owner: req.body.owner,
        returnLink: req.body.returnLink
    };

    try {
        await mailService.emailAgent(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}

const sendMonitorInvite = async (req: Request, res: Response) => {
    // Create new mail data object
    const data = {
        name: req.body.name,
        email: req.body.email,
        owner: req.body.owner,
        returnLink: req.body.returnLink
    };

    try {
        await mailService.emailMonitor(data);
        res.status(200).send({
            message: "Email sent!"
        });
    } catch {
        res.status(500).send('Internal server error');
    }
}

const controller = {
    sendAgentInvite,
    sendMonitorInvite,
    sendUsernameRecover,
    sendPasswordRenew,
};
export default controller;

