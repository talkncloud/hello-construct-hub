import { Aws, aws_s3, aws_s3_deployment } from 'aws-cdk-lib';
import { BucketDeployment } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface BucketProps extends aws_s3.BucketProps {
  /**
   * The name of the bucket. This will be prefixed to the pattern name-region-accountid.
   */
  readonly name: string;
}

export class HelloBucket extends aws_s3.Bucket {
  constructor(scope: Construct, id: string, props: BucketProps) {
    super(scope, id, {
      ...props,
      bucketName: `${props?.name}-${Aws.REGION}-${Aws.ACCOUNT_ID}`,
    });

    new BucketDeployment(this, 'upload-readme', {
      sources: [aws_s3_deployment.Source.asset('./docs')],
      destinationBucket: aws_s3.Bucket.fromBucketArn(
        this,
        'get-bucket',
        this.bucketArn,
      ),
    });
  }
}
