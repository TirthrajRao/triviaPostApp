import { TestBed, inject } from '@angular/core/testing';
import { UserGuard } from './user.guard';
describe('UserGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserGuard]
        });
    });
    it('should ...', inject([UserGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=user.guard.spec.js.map