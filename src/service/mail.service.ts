/*
Copyright 2023 VirtualYou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

mail.service.ts - AWS SES email service
@author David L Whitehurst

*/

import { SES } from "@aws-sdk/client-ses";
import { getTemplateParams, getUsernameRecoveryTemplateParams } from "../utility/EmailParams";
import EmailInviteType from "../types/email.invite.type";
import config from "../config/config";
import UsernameRecoverType from "../types/username.recover.type";

class MailService {

    // AWS SES Client
    private ses = new SES({
        region: config.aws.region,
        credentials: {
            accessKeyId: config.aws.key,
            secretAccessKey: config.aws.secret,
        }
    });

    // Send Username Recovery Email
    async usernameRecover(obj: UsernameRecoverType) {
        const params= getUsernameRecoveryTemplateParams(obj.fullname, obj.email,"me@dlwhitehurst.com", obj.username, "userRecover");
        try {
            // @ts-ignore
            await this.ses.sendTemplatedEmail(params, (err: any, data: any) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Send Agent Invitation Email
    async emailAgent(obj: EmailInviteType) {
        const params= getTemplateParams(obj.name, obj.email,"me@dlwhitehurst.com", obj.owner, obj.returnLink, "agentTemplate3");
        try {
            // @ts-ignore
            await this.ses.sendTemplatedEmail(params, (err: any, data: any) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Send Monitor Invitation Email
    async emailMonitor(obj: EmailInviteType) {
        const params= getTemplateParams(obj.name, obj.email,"me@dlwhitehurst.com", obj.owner, obj.returnLink, "monitorTemplate3");
        try {
            // @ts-ignore
            await this.ses.sendTemplatedEmail(params, (err: any, data: any) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
} // end class

export default new MailService();