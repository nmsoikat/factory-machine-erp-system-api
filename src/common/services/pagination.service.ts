
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
    calculateOffset(query) {
        const { page, limit } = query;
        const offset = (page - 1) * limit;

        return { take: limit || 20, skip: offset || 0 };
    }

}

