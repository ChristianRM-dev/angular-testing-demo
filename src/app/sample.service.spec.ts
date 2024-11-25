import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SampleService } from './sample.service';
import { MOCK_SAMPLE_DATA } from './mock-sample-data';

describe('SampleService', () => {
  let service: SampleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SampleService],
    });
    service = TestBed.inject(SampleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch data successfully', () => {
    const mockData = [{ id: 1, title: 'Test Post' }];

    service.fetchData().subscribe((data) => {
      console.log('API Response:', data);
      expect(data.length).toBe(1);
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should validate mock data', () => {
    expect(MOCK_SAMPLE_DATA.length).toBe(2);
    expect(MOCK_SAMPLE_DATA[0].name).toBe('John Doe');
  });
});
