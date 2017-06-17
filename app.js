import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Admin, Resource, Delete, englishMessages } from 'admin-on-rest';
import jsonRestClient from 'aor-json-rest-client';
import chineseMessages from 'aor-language-chinese';
import authClient from './authClient';
import { ApplyIcon, ApplyList, ApplyShow } from './Apply';
import { MyItemIcon, MyItemList, MyItemEdit } from './MyItem';
import { PickIcon, PickList, PickShow } from './Pick';
import { MyCheckList, MyCheckEdit } from './MyCheck';
import { AitemsIcon, AitemsList, AitemsShow } from './Allocatoritems';
import { KeepersList, KeepersShow, KeepersIcon, KeepersEdit} from './Keepers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import data from './data';
import addUploadFeature from './addUploadFeature';
import saga from './saga';
import * as customMessages from './i18n';
import Menu from './Menu';
import { asteroid, websockClient } from './asteroid';
const messages = {
    cn: { ...chineseMessages, ...customMessages.cn },
    en: { ...englishMessages, },
};
try {
    injectTapEventPlugin();
} catch (e) {
    // do nothing
}
const restClient = jsonRestClient(data, true);
const uploadCapableClient = addUploadFeature(restClient);
const delayedRestClient = (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(uploadCapableClient(type, resource, params)), 1000));
render(
    <Admin authClient={authClient}  customSagas={saga} restClient={websockClient} title="Test" locale="cn" menu={Menu} messages={messages}>
        <Resource name="ApplyItem" list={ApplyList}  show={ApplyShow} icon={ApplyIcon} role='agent' />
        <Resource name="MyItem" list={MyItemList} edit={MyItemEdit} icon={MyItemIcon} role='agent' />
        <Resource name="MyCheck"  list={MyCheckList} edit={MyCheckEdit} role='tester'/>
        <Resource name="Allocatoritems" list={AitemsList} show={AitemsShow} icon={AitemsIcon} role='assigner'/>
        <Resource name="Keepers" list={KeepersList}  show={KeepersShow} edit={KeepersEdit} icon={KeepersIcon} role='keeper' />
    </Admin>,
    document.getElementById('root'),
);