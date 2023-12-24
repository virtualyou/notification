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

params.type.ts - Params type interface (AWS SES Email)
@author David L Whitehurst

*/

export default interface Params {
    Destination: {
        ToAddresses: string[];
    },
    Message: {
        Body: {
            Text: {
                Data: string
            },
        },
        Subject: {
            Data: string
        },
    },
    Source: string,
}
