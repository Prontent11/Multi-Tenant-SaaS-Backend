import { Request, Response } from 'express';
import {
  createOrganization,
  updateOrganizationStatus,
  listOrganizations,
  createOrganizationAdmin,
} from './organization.service';

export async function createOrg(req: Request, res: Response) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name required' });

  const org = await createOrganization(name);
  res.status(201).json(org);
}

export async function changeOrgStatus(req: Request, res: Response) {
  const { status } = req.body;
  const orgId = Number(req.params.id);

  if (!['ACTIVE', 'DISABLED'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const org = await updateOrganizationStatus(orgId, status);
  res.status(200).json(org);
}

export async function getOrganizations(_req: Request, res: Response) {
  const orgs = await listOrganizations();
  res.status(200).json(orgs);
}

export async function createOrgAdmin(req: Request, res: Response) {
  const orgId = Number(req.params.id);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const admin = await createOrganizationAdmin(orgId, email, password);
  res.status(201).json(admin);
}
