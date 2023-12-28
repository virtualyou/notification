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

email.utils.ts - Function exports for Agent and Monitor email bodies
@author David L Whitehurst

*/

/**
 * This is a function that prepares an AWS SES Agent invitation email body.
 *
 * @param {string} name - The person the email is addressing.
 * @param {string} owner - The owner that sent the email.
 * @param {string} returnLink - The return link for the new registration.
 * @returns {string} The text email body.
 */
export function getAgentBody(name: string, owner: string, returnLink: string) {
    return name + " , " + owner + " is sending you an invite to be an Agent for their VirtualYou account. Please call "
        + owner + " to verify this and get a one-time passcode before using this link. " + returnLink;
}

/**
 * This is a function that prepares an AWS SES Monitor invitation email body.
 *
 * @param {string} name - The person the email is addressing.
 * @param {string} owner - The owner that sent the email.
 * @param {string} returnLink - The return link for the new registration.
 * @returns {string} The text email body.
 */
export function getMonitorBody(name: string, owner: string, returnLink: string) {
    return name + " , " + owner + " is sending you an invite to be a Monitor for their VirtualYou account. Please call "
        + owner + " to verify this and get a one-time passcode before using this link. " + returnLink;
}

export function getTestBody(name: string) {
    return "Hello " + name + "!";
}