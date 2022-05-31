import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from './_interface/iuser';

export class InApi implements InMemoryDbService {
  createDb() {
    const users: IUser[] = [
      {
        id: 1,
        name: 'Rosa Maria',
        last_message: 'Qualquer dúvida estamos a disposição',
        img: 'https://avatars.githubusercontent.com/u/39253660?v=4',
      },
      {
        id: 2,
        name: 'Kevin Moscarelli',
        last_message: 'Temos recebido várias solicitações desse tipo',
        img: 'https://avatars.githubusercontent.com/u/416563?v=4',
      },
      {
        id: 3,
        name: 'Clodoaldo Cavalcante',
        last_message: 'Vi que podemos começar assim, e depois mudar',
        img: 'https://avatars.githubusercontent.com/u/6004537?v=4',
      },
      {
        id: 4,
        name: 'Jason Xavier de Barros ',
        last_message: 'Coisas acontecem em curto período de tempo',
        img: 'https://avatars.githubusercontent.com/u/1087957?v=4',
      },
      {
        id: 5,
        name: 'Hugo scarp',
        last_message: 'Trabalhos como freelancer',
        img: 'https://avatars.githubusercontent.com/u/123679?v=4',
      },
    ];

    return { users };
  }
}
