import { Aws, aws_s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface BucketProps extends aws_s3.BucketProps {
  readonly name: string;
}

export class HelloBucket extends aws_s3.Bucket {
  constructor(scope: Construct, id: string, props: BucketProps) {
    super(scope, id, {
      ...props,
      bucketName: `${props?.name}-${Aws.REGION}-${Aws.ACCOUNT_ID}`,
    });
  }
}
