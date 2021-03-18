import {environment} from '../../environments/environment';

export const DomainName = environment.production ? 'https://google.com' : 'https://localhost:44318';
