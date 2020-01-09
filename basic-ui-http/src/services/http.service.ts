import { Vue } from 'vue-property-decorator';

export class HttpMockService {
  getMockDataJournal() {
    return require('../mockData/journalMock.json');
  }
  getMockJournalDelay = () => {
    const mockData = this.getMockDataJournal();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000);
    });
  }
}
export class HttpService {
  //   serverURL = 'https://domain.com/api/orders';
  protocol = 'http';

  // hostname = 'localhost';
  // hostname = window.location.hostname.replace('vuejs-', 'vuejsback-');
  hostname = window.location.hostname;

  port = '3030';

  formedURL = `${this.protocol}://${this.hostname}:${this.port}/api/`;

  /** GET request
   * @param endpoint :string, endpoint name
   * @returns Promise<any>
  */
  public get(endpoint: string, params : object): Promise<any> {
    /* eslint-disable */
    console.log('protocol ',this.protocol, ' hostname ', this.hostname, ' formedURL ', this.formedURL);
    return Vue.axios.get(`${this.formedURL}${endpoint}`, { params });
  }

  /** POST request
   * @param url :string, endpoint name
   * @param body : post body content
   * @returns Promise<any>
  */
  public post(endpoint: string, body: any): Promise<any> {
    console.log('protocol ',this.protocol, ' hostname ', this.hostname, ' formedURL ', this.formedURL);
    return Vue.axios.post(`${this.formedURL}${endpoint}`, body);
  }

  public getDirect(url: string, headers: any = {}): Promise<any> {
    return Vue.axios.get(url);
  }

  public putDirect(url: string, obj: any, headers: any = {}): Promise<any> {
    return Vue.axios.put(`${url}`, obj);
  }

  public postDirect(url: string, obj: any, headers: any = {}): Promise<any> {
    return Vue.axios.post(`${url}`, obj);
  }
}
