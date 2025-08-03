import { Request, Response, NextFunction } from 'express';
import { sendSuccess, sendError } from '../../../utils/responseHelper';
import { AppError } from '../../../middleware/errorHandler';

// Placeholder data - replace with database queries
const bugs = [
  {
    id: 1,
    title: 'Login button not working',
    description: 'Users cannot login using the main login button',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Dashboard loading slowly',
    description: 'Dashboard takes over 5 seconds to load',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-16')
  }
];

export const getAllBugs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10, status, priority } = req.query;
    
    // Filter bugs based on query params
    let filteredBugs = [...bugs];
    
    if (status) {
      filteredBugs = filteredBugs.filter(bug => bug.status === status);
    }
    
    if (priority) {
      filteredBugs = filteredBugs.filter(bug => bug.priority === priority);
    }
    
    // Pagination
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedBugs = filteredBugs.slice(startIndex, endIndex);
    
    sendSuccess(res, {
      bugs: paginatedBugs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: filteredBugs.length,
        pages: Math.ceil(filteredBugs.length / Number(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getBugById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const bug = bugs.find(b => b.id === Number(id));
    
    if (!bug) {
      throw new AppError('Bug not found', 404, 'BUG_NOT_FOUND');
    }
    
    sendSuccess(res, bug);
  } catch (error) {
    next(error);
  }
};

export const createBug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, priority = 'medium' } = req.body;
    
    if (!title || !description) {
      throw new AppError('Title and description are required', 400, 'VALIDATION_ERROR');
    }
    
    const newBug = {
      id: bugs.length + 1,
      title,
      description,
      status: 'open',
      priority,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    bugs.push(newBug);
    
    sendSuccess(res, newBug, 201);
  } catch (error) {
    next(error);
  }
};

export const updateBug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const bugIndex = bugs.findIndex(b => b.id === Number(id));
    
    if (bugIndex === -1) {
      throw new AppError('Bug not found', 404, 'BUG_NOT_FOUND');
    }
    
    const updatedBug = {
      ...bugs[bugIndex],
      ...req.body,
      updatedAt: new Date()
    };
    
    bugs[bugIndex] = updatedBug;
    
    sendSuccess(res, updatedBug);
  } catch (error) {
    next(error);
  }
};

export const deleteBug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const bugIndex = bugs.findIndex(b => b.id === Number(id));
    
    if (bugIndex === -1) {
      throw new AppError('Bug not found', 404, 'BUG_NOT_FOUND');
    }
    
    bugs.splice(bugIndex, 1);
    
    sendSuccess(res, { message: 'Bug deleted successfully' });
  } catch (error) {
    next(error);
  }
};