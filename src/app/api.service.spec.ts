import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiMockService } from './api-mock.service';
import { Todo } from './todo';
import { environment } from '../environments/environment';
describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service:ApiService;
  const apiUrl=environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide:ApiService,
          useClass:ApiMockService
      }],
      imports:[HttpClientTestingModule]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service=TestBed.get(ApiService)
  });

  afterEach(()=>{
    httpTestingController.verify()
  })

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it("should get all todos from mock service",()=>{
    service.getAllTodos().subscribe(
      result=>
      // {console.log(result)}
        expect(result).toEqual([new Todo({id: 1, title: 'Read article', complete: false})])
    )
  })

  it('test getall',inject([ApiService],(sevice:ApiService)=>{
    const testdata:Todo[]=[{id: 1, title: 'Read article', complete: false}]

    httpClient.get<Todo[]>(apiUrl+"/todos")
      .subscribe(data=>
        expect(data).toEqual(testdata)  
      )
      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne(apiUrl+"/todos");

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(testdata);

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
  }))


});
