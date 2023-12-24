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
import { getParams } from "../utility/EmailParams";
import { getTestBody, getAgentBody, getMonitorBody } from "../utility/EmailBody";
import EmailType from "../types/email.type";
import config from "../config/config";

class MailService {

    // AWS SES Client
    private ses = new SES({
        region: config.aws.region,
        credentials: {
            accessKeyId: config.aws.key,
            secretAccessKey: config.aws.secret,
        }
    });

    // Send Agent Invitation Email
    emailAgent(formData: EmailType) {
        console.log(formData.email);
        const params= getParams(formData.email, getAgentBody(formData.name), "VirtualYou Agent Invitation", "me@dlwhitehurst.com");
        this.ses.sendEmail(params, (err: any, data: any) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }

    // Send Monitor Invitation Email
    emailMonitor(formData: EmailType) {
        console.log(formData.email);
        const params= getParams(formData.email, getMonitorBody(formData.name), "VirtualYou Monitor Invitation", "me@dlwhitehurst.com");
        this.ses.sendEmail(params, (err: any, data: any) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }

    // Send Agent Invitation Email
    emailTest(formData: EmailType) {
        console.log(formData.email);
        const params= getParams(formData.email, getTestBody(formData.name), "VirtualYou Test Notification", "me@dlwhitehurst.com");
        this.ses.sendEmail(params, (err: any, data: any) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }
}

export default new MailService();