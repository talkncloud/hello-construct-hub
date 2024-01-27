import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HelloBucket } from '../src';

describe('PrivateBucket', () => {
  it('should match snapshot', () => {
    // Given
    const stack = new Stack();
    // When
    new HelloBucket(stack, 'id', { name: 'test' });
    // Then
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
