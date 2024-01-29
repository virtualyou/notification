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
 * routes.ts
 */

import { NextFunction, Request, Response } from "express";
import controller from "../controllers/controller";
import authJwt from '../utility/authJwt';
import express from 'express';
import authApp from "../utility/authApp";

const router = express();

router.use((_req: Request, res: Response, next: NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
});

/*
 * ************************************************************************
 * WARNING: Admin/App Only
 * ************************************************************************
 */
// POST - send a username recover
router.post(
    "/notification/v1/username-recover",
    [authApp.isApp],
    controller.sendUsernameRecover
);


/*
 * ************************************************************************
 * USE: owner endpoints
 * ************************************************************************
 */

// POST - send an agent invitation 
router.post(
    "/notification/v1/owner/agent-invite",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.sendAgentInvite
);

// POST - send a monitor invitation 
router.post(
    "/notification/v1/owner/monitor-invite",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.sendMonitorInvite
);

export default router;
