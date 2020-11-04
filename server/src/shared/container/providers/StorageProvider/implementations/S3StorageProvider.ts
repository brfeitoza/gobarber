import fs from 'fs';
import path from 'path';
import mime from 'mime';
import { S3 } from 'aws-sdk';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import IStorageProvider from '../models/IStorageProvider';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: 'us-east-1',
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);

    const mimeType = mime.getType(originalPath);

    if (!mimeType) {
      throw new AppError('File not found.');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: uploadConfig.config.s3.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType: mimeType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.s3.bucket,
        Key: file,
      })
      .promise();
  }
}

export default S3StorageProvider;
